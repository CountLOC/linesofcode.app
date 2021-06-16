<main class="max-width" id="appPageMain">
	
	<section class="content" data-page="1">
		
		<div class="words">
			<h1 style="margin-bottom: 5px;">Step 1</h1>
			<p>Input your Github URL into the box below!</p>
			<form class="cta-wrap column" id="gitUrlForm">
				<label>Git URL
					<input type="url" id="gitUrlInput" placeholder="https://github.com/CountLOC/linesofcode.app" pattern="^https:\/\/github\.com\/.*" required>
				</label>
				<button type="submit">Count Lines of Code</button>
			</form>
		</div>

		<div class="assets">
			<img src="/assets/illustrations/vcs.svg" alt="A man looking at a visulatization of code" title="linesofcode.app">
		</div>

	</section>

	<section class="content" data-page="2" hidden>

		<div class="words">
			<h1 style="margin-bottom: 5px;">Step 2</h1>
			<p>Give CountLOC temporary access to your GitHub repository</p>
			<a href="https://github.com/login/oauth/authorize?client_id=c01abc2b579fbf2b6632&redirect_uri=http://localhost:9500/oauth-consume&scope=repo" title="Login with GitHub" class="oauth-button"><img src="/assets/github-mark.png" alt="The white on black Github icon mark" title="Login with GitHub">Login With Github</a>
		</div>

		<div class="assets">
			<img src="/assets/illustrations/auth.svg" alt="An image of two cpus and a phone with a pad lock between them" title="Authenticate with GitHub">
		</div>

	</section>

</main>

<script src="/js/app.js"></script>