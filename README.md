<h1>
  <b>
    How it Works
  </b>
</h1>
<p>
  Bolt uses <a href="https://github.com/titaniumnetwork-dev/Ultraviolet">Ultraviolet</a>, a proxy backend provided from Titanium Network. Ultraviolet v3 is a fast proxy service, but it's sucessor, <a href="https://github.com/MercuryWorkshop/scramjet">Scramjet</a>, is in the works. Bolt also uses Scramjet, but will default to Ultraviolet because Scramjet is not ready for production yet.
  
  Bolt also uses <a href="https://github.com/binary-person/rammerhead">Rammerhead</a>,  a proxy service that is balanced between speed and site support.
</p>
<h1>
  <b>
    Why Bolt is Better than other Proxies
  </b>
</h1>
<p>
  If you have used proxy sites such as <a href="https://github.com/UseInterstellar/Interstellar">Interstellar</a> before, you know that they are not very fast or powerful. This is becuase sites like Interstellar use outdated proxy services such as Ultraviolet <b><i>v2</i></b> and <a href="https://github.com/NebulaServices/Dynamic">Dynamic</a>. Ultraviolet v2 is outdated and uses Bare, which is old and not secure. Dynamic is very slow, and does not support many sites.
</p>
<h1>
  <b>
    Supported Sites
  </b>
</h1>
<p>
  Because Bolt is so powerful, it supports many popular sites. Some sites that it support are:

  - <b>GeForce NOW</b><br>
  - <b>Now.gg</b><br>
  - <b>Discord</b><br>
  - <b>Youtube</b><br>
  - <b>TikTok</b><br>
</p>
<h1>
  <b>
    Usage
  </b>
</h1>
<p>
  To use Bolt, you must deploy it. You <b><i>CANNOT</i></b> deploy to services such as:
  
  - <b>Vercel</b><br>
  - <b>Netlify</b><br>
  - <b>Github Pages</b><br>
  - <b>Cloudflare Pages</b><br>

  because they either do not support Wisp, service workers, or are static.<br>

  You CAN deploy to:<br><br> <b>
  - Render<br>
  - Codeanywhere<br>
  - Gitpod<br>
  - Koyeb<br>
  - CodeSandbox<br>
  - Github Codespaces<br>
  - Railway<br></b>
</p>
<h1>
  <b>
    Local Usage
  </b>
</h1>
<p>
  This is a Node JS application with npm packages. You must first run:
  
  ```bash
  npm i
  pnpm i
  ```
  <br>
  then run
  
  ```bash
  pnpm start
  ```
  
  You should have a local Bolt on <b>localhost:8080</b>!
</p>
