# Cloudinary Media Generation MCP Server

<!-- mcp-name: io.github.cloudinary/media-generation-mcp -->

<!-- Start Summary [summary] -->
## Summary

Image Generation API: Use the Image Generation API to generate images from text prompts using various AI models.

The API supports Basic Authentication using your Cloudinary API Key and API Secret, which can be found on the [API Keys page](https://console.cloudinary.com/app/settings/api-keys) of your Cloudinary Console.

**Key Features:**
* **Unified API**: A single interface for generating images across multiple best-in-class AI models.
* **Cloudinary Integration**: Generated images are automatically available for delivery, transformation, and optimization through Cloudinary's platform.
* **Future-proof**: Adopt new state-of-the-art models as they become available, without rebuilding your integration.

**Supported Model Families:**
* **flux**: Photorealistic images (FLUX.2 Klein 9B / FLUX.2 Pro).
* **recraft**: Vector and illustration (Recraft V3 / Recraft V4).
* **gpt-image**: Campaign and marketing images (GPT Image 1 Mini / GPT Image 2).
* **nano-banana**: General purpose generation (Nano Banana 1 / Nano Banana 2).
* **ideogram**: Realism, text rendering, and artistic generation (Ideogram V4).

The Image Generation API requires the [Cloudinary Image Generation add-on](https://console.cloudinary.com/app/marketplace/details/image_generation).

[Learn more](https://cloudinary.com/documentation/image_generation_addon)

**Note**: 

This is an early version of our Image Generation API. As the capability grows, certain features and endpoints may be adjusted. We invite you to try it out and share your [feedback with our support team](https://support.cloudinary.com/hc/en-us/requests/new).
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [Cloudinary Media Generation MCP Server](#cloudinary-media-generation-mcp-server)
  * [Installation](#installation)
  * [Custom server / non-default host](#custom-server-non-default-host)
  * [Progressive Discovery](#progressive-discovery)
  * [Development](#development)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start Installation [installation] -->
## Installation

<details>
<summary>Claude Desktop</summary>

Install the MCP server as a Desktop Extension using the pre-built [`mcp-server.mcpb`](https://github.com/cloudinary/media-generation-mcp/releases/download/v1.0.0/mcp-server.mcpb) file:

Simply drag and drop the [`mcp-server.mcpb`](https://github.com/cloudinary/media-generation-mcp/releases/download/v1.0.0/mcp-server.mcpb) file onto Claude Desktop to install the extension.

The MCP bundle package includes the MCP server and all necessary configuration. Once installed, the server will be available without additional setup.

> [!NOTE]
> MCP bundles provide a streamlined way to package and distribute MCP servers. Learn more about [Desktop Extensions](https://www.anthropic.com/engineering/desktop-extensions).

</details>

<details>
<summary>Cursor</summary>

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](cursor://anysphere.cursor-deeplink/mcp/install?name=CloudinaryMediaGeneration&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyJAY2xvdWRpbmFyeS9tZWRpYS1nZW5lcmF0aW9uLW1jcCIsInN0YXJ0IiwiLS1hcGkta2V5IiwiIiwiLS1hcGktc2VjcmV0IiwiIiwiLS1jbG91ZC1uYW1lIiwiIl19)

Or manually:

1. Open Cursor Settings
2. Select Tools and Integrations
3. Select New MCP Server
4. If the configuration file is empty paste the following JSON into the MCP Server Configuration:

```json
{
  "command": "npx",
  "args": [
    "@cloudinary/media-generation-mcp",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```

</details>

<details>
<summary>Claude Code CLI</summary>

```bash
claude mcp add CloudinaryMediaGeneration -- npx -y @cloudinary/media-generation-mcp start --api-key  --api-secret  --cloud-name 
```

</details>
<details>
<summary>Gemini</summary>

```bash
gemini mcp add CloudinaryMediaGeneration -- npx -y @cloudinary/media-generation-mcp start --api-key  --api-secret  --cloud-name 
```

</details>
<details>
<summary>Windsurf</summary>

Refer to [Official Windsurf documentation](https://docs.windsurf.com/windsurf/cascade/mcp#adding-a-new-mcp-plugin) for latest information

1. Open Windsurf Settings
2. Select Cascade on left side menu
3. Click on `Manage MCPs`. (To Manage MCPs you should be signed in with a Windsurf Account)
4. Click on `View raw config` to open up the mcp configuration file.
5. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "@cloudinary/media-generation-mcp",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```
</details>
<details>
<summary>VS Code</summary>

[![Install in VS Code](https://img.shields.io/badge/VS_Code-VS_Code?style=flat-square&label=Install%20CloudinaryMediaGeneration%20MCP&color=0098FF)](vscode://ms-vscode.vscode-mcp/install?name=CloudinaryMediaGeneration&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyJAY2xvdWRpbmFyeS9tZWRpYS1nZW5lcmF0aW9uLW1jcCIsInN0YXJ0IiwiLS1hcGkta2V5IiwiIiwiLS1hcGktc2VjcmV0IiwiIiwiLS1jbG91ZC1uYW1lIiwiIl19)

Or manually:

Refer to [Official VS Code documentation](https://code.visualstudio.com/api/extension-guides/ai/mcp) for latest information

1. Open [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface#_command-palette)
1. Search and open `MCP: Open User Configuration`. This should open mcp.json file
2. If the configuration file is empty paste the full json

```bash
{
  "command": "npx",
  "args": [
    "@cloudinary/media-generation-mcp",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```

</details>
<details>
<summary> Stdio installation via npm </summary>
To start the MCP server, run:

```bash
npx @cloudinary/media-generation-mcp start --api-key  --api-secret  --cloud-name 
```

For a full list of server arguments, run:

```
npx @cloudinary/media-generation-mcp --help
```

</details>
<!-- End Installation [installation] -->

## Custom server / non-default host

By default the server talks to the production Cloudinary API
(`https://api.cloudinary.com/v2`). To point it at a different host — staging, a
regional endpoint, or a local mock — pass `--server-url` (or for clients that
use a config block, add it to `args`):

```bash
npx @cloudinary/media-generation-mcp start \
  --api-key  --api-secret  --cloud-name  \
  --server-url https://api-eu.cloudinary.com/v2
```

In a client config block:

```json
{
  "command": "npx",
  "args": [
    "@cloudinary/media-generation-mcp",
    "start",
    "--api-key", "",
    "--api-secret", "",
    "--cloud-name", "",
    "--server-url", "https://api-eu.cloudinary.com/v2"
  ]
}
```

Notes:

- **Keep the `/v2` suffix.** Operation paths (`/processing/{cloud_name}/...`) are
  appended to this base, so a host without `/v2` will return 404s.
- **`--server-url` overrides the URL entirely.** `--server-index` selects from
  the schema's `servers` list, which currently has a single entry, so only
  `--server-index 0` is valid — use `--server-url` for anything else.
- **`{cloud_name}` is independent of the host.** It is always taken from
  `--cloud-name` / `CLOUDINARY_CLOUD_NAME` / `CLOUDINARY_URL`, regardless of
  `--server-url`.
- Add `--log-level debug` to print the outgoing request URL and confirm the
  override took effect.

<!-- Start Progressive Discovery [dynamic-mode] -->
## Progressive Discovery

MCP servers with many tools can bloat LLM context windows, leading to increased token usage and tool confusion. Dynamic mode solves this by exposing only a small set of meta-tools that let agents progressively discover and invoke tools on demand.

To enable dynamic mode, pass the `--mode dynamic` flag when starting your server:

```jsonc
{
  "mcpServers": {
    "CloudinaryMediaGeneration": {
      "command": "npx",
      "args": ["@cloudinary/media-generation-mcp", "start", "--mode", "dynamic"],
      // ... other server arguments
    }
  }
}
```

In dynamic mode, the server registers only the following meta-tools instead of every individual tool:

- **`list_tools`**: Lists all available tools with their names and descriptions.
- **`describe_tool_input`**: Returns the input schema for one or more tools by name.
- **`execute_tool`**: Executes a tool by name with its arguments.

This approach significantly reduces the number of tokens sent to the LLM on each request, which is especially useful for servers with a large number of tools.
<!-- End Progressive Discovery [dynamic-mode] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

## Development

Run locally without a published npm package:
1. Clone this repository
2. Run `npm install`
3. Run `npm run build`
4. Run `node ./bin/mcp-server.js start --api-key  --api-secret  --cloud-name `

To use this local version with Cursor, Claude or other MCP Clients, you'll need to add the following config:

```json
{
  "command": "node",
  "args": [
    "./bin/mcp-server.js",
    "start",
    "--api-key",
    "",
    "--api-secret",
    "",
    "--cloud-name",
    ""
  ]
}
```

Or to debug the MCP server locally, use the official MCP Inspector:

```bash
npx @modelcontextprotocol/inspector node ./bin/mcp-server.js start --api-key  --api-secret  --cloud-name 
```



## Contributions

While we value contributions to this MCP Server, the code is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### MCP Server Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@cloudinary/media-generation-mcp&utm_campaign=mcp-typescript)
