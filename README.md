<h2>API Description</h2>

<p>This API provides access to aggregated social media statistics across multiple platforms. The API is designed to fetch, merge, and cache social media data from various platforms such as Platform A, Platform B, and Platform C. It also includes authentication and rate-limiting middleware to ensure secure and efficient access.</p>

<h3>Key Features</h3>
<ul>
  <li><strong>Platform Integration</strong>: Retrieves data from multiple social media platforms.</li>
  <li><strong>Data Merging</strong>: Combines data from different platforms into a unified response.</li>
  <li><strong>Caching</strong>: Implements caching to improve performance and reduce load times.</li>
  <li><strong>Security</strong>: Includes authentication and rate limiting to protect the API.</li>
</ul>

<h2>API Endpoints</h2>

<h3>1. GET /platformA</h3>
<ul>
  <li><strong>Description</strong>: Fetches social media statistics from Platform A.</li>
  <li><strong>Middleware</strong>:
    <ul>
      <li><code>authenticate</code>: Ensures the request is from an authenticated user.</li>
      <li><code>rateLimiter</code>: Limits the number of requests to prevent abuse.</li>
    </ul>
  </li>
  <li><strong>Response</strong>: JSON object containing the statistics from Platform A.</li>
  <li><strong>Status Codes</strong>:
    <ul>
      <li><code>200 OK</code>: Successfully retrieved the data.</li>
      <li><code>404 Not Found</code>: Data could not be retrieved.</li>
    </ul>
  </li>
  <li><strong>Response Format</strong>:
    <pre><code>{
  "followers": 1200,
  "posts": 300,
  "likes": 4500
}</code></pre>
  </li>
  <li><strong>Error Format</strong>:
    <pre><code>{
  "message": "Data not found"
}</code></pre>
  </li>
</ul>

<h3>2. GET /platformB</h3>
<ul>
  <li><strong>Description</strong>: Fetches social media statistics from Platform B.</li>
  <li><strong>Middleware</strong>:
    <ul>
      <li><code>authenticate</code>: Ensures the request is from an authenticated user.</li>
      <li><code>rateLimiter</code>: Limits the number of requests to prevent abuse.</li>
    </ul>
  </li>
  <li><strong>Response</strong>: JSON object containing the statistics from Platform B.</li>
  <li><strong>Status Codes</strong>:
    <ul>
      <li><code>200 OK</code>: Successfully retrieved the data.</li>
      <li><code>404 Not Found</code>: Data could not be retrieved.</li>
    </ul>
  </li>
  <li><strong>Response Format</strong>:
    <pre><code>{
  "followers": 2500,
  "posts": 400,
  "likes": 6700
}</code></pre>
  </li>
  <li><strong>Error Format</strong>:
    <pre><code>{
  "message": "Data not found"
}</code></pre>
  </li>
</ul>

<h3>3. GET /platformC</h3>
<ul>
  <li><strong>Description</strong>: Fetches social media statistics from Platform C.</li>
  <li><strong>Middleware</strong>:
    <ul>
      <li><code>authenticate</code>: Ensures the request is from an authenticated user.</li>
      <li><code>rateLimiter</code>: Limits the number of requests to prevent abuse.</li>
    </ul>
  </li>
  <li><strong>Response</strong>: JSON object containing the statistics from Platform C.</li>
  <li><strong>Status Codes</strong>:
    <ul>
      <li><code>200 OK</code>: Successfully retrieved the data.</li>
      <li><code>404 Not Found</code>: Data could not be retrieved.</li>
    </ul>
  </li>
  <li><strong>Response Format</strong>:
    <pre><code>{
  "followers": 1800,
  "posts": 350,
  "likes": 5300
}</code></pre>
  </li>
  <li><strong>Error Format</strong>:
    <pre><code>{
  "message": "Data not found"
}</code></pre>
  </li>
</ul>

<h3>4. GET /social-stats</h3>
<ul>
  <li><strong>Description</strong>: Fetches and merges social media statistics from all platforms (A, B, and C).</li>
  <li><strong>Middleware</strong>:
    <ul>
      <li><code>authenticate</code>: Ensures the request is from an authenticated user.</li>
      <li><code>rateLimiter</code>: Limits the number of requests to prevent abuse.</li>
    </ul>
  </li>
  <li><strong>Response</strong>: JSON object containing merged statistics from all platforms.</li>
  <li><strong>Status Codes</strong>:
    <ul>
      <li><code>200 OK</code>: Successfully retrieved and merged the data.</li>
      <li><code>500 Internal Server Error</code>: Failed to fetch or merge the data.</li>
    </ul>
  </li>
  <li><strong>Caching</strong>: Cached for 300 seconds to improve performance.</li>
  <li><strong>Response Format</strong>:
    <pre><code>{
  "totalFollowers": 5500,
  "totalPosts": 1050,
  "totalLikes": 16500
}</code></pre>
  </li>
  <li><strong>Error Format</strong>:
    <pre><code>{
  "message": "Failed to fetch social stats",
  "error": "Internal Server Error"
}</code></pre>
  </li>
</ul>
