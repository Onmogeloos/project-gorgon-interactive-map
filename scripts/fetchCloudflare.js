import dotenv from 'dotenv'
dotenv.config({ path: './scripts/.env.local' })
import { writeFileSync, rmSync, rm } from 'fs';

const baseUrl = `https://api.cloudflare.com/client/v4`;
const accountId = process.env.ACCOUNT_ID;
const namespaceId = process.env.NAMESPACE_ID;

async function run() {
    async function fetchData(endpoint, method = 'GET', body = null) {
        const response = await fetch(`${baseUrl}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${process.env.CLOUDFLARE_API_KEY}`,
                'Content-Type': 'application/json'
            },
            method,
            body: body ? JSON.stringify(body) : null
        });
        const data = await response.json();
        if (!data.success) {
            throw new Error(`Error fetching data from Cloudflare API: ${data.errors.map(e => e.message).join(', ')}`);
        }
        return data.result;
    }

    const keys = (await fetchData(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/keys`))
        .map(key => key.name);
    const data = await fetchData(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk/get`, 'POST', {
        keys,
        type: 'json'
    });
    const values = Object.values(data.values);
    // remove file first
    writeFileSync('./scripts/data.json', JSON.stringify(values, null, 2));
}

run().catch(error => {
    console.error('Error:', error);
    process.exit(1);
});