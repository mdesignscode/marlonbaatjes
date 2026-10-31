<script lang="ts">
	// No form backend: the coupon opens an email with the visitor's note already written.
	let name = $state('');
	let email = $state('');
	let topic = $state('');
	let message = $state('');

	function send(e: SubmitEvent) {
		e.preventDefault();
		const subject = topic.trim() || 'Hello from your portfolio';
		const body = `${message.trim()}\n\n${name.trim()}${email.trim() ? `\n${email.trim()}` : ''}`;
		location.href = `mailto:marlonbaatjes62@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
	}
</script>

<section id="contact" class="contact" aria-labelledby="contact-title">
	<div class="wrap">
		<form class="coupon" onsubmit={send} action="mailto:marlonbaatjes62@gmail.com" method="post" enctype="text/plain" data-reveal>
			<span class="notch top" aria-hidden="true"></span>
			<span class="notch bottom" aria-hidden="true"></span>

			<div class="stub">
				<h2 id="contact-title">Let's make something</h2>
				<p>A developer role, a project, or a cover for your next release. Write to me and I'll answer by email.</p>
			</div>

			<div class="fields">
				<label class="visually-hidden" for="c-name">Your name</label>
				<input id="c-name" name="name" bind:value={name} placeholder="Your name" autocomplete="name" required />

				<label class="visually-hidden" for="c-email">Your email</label>
				<input id="c-email" name="email" type="email" bind:value={email} placeholder="Your email" autocomplete="email" required />

				<label class="visually-hidden" for="c-topic">What it's about</label>
				<input id="c-topic" name="subject" bind:value={topic} placeholder="What it's about" />

				<label class="visually-hidden" for="c-msg">Your message</label>
				<textarea id="c-msg" name="message" bind:value={message} placeholder="Your message" rows="3" required></textarea>

				<button class="btn btn--deep send" type="submit">Write the email</button>
			</div>
		</form>
	</div>
</section>

<style>
	.contact {
		background: var(--bg);
		padding-block: var(--section);
	}

	.coupon {
		--cut: 46%;
		position: relative;
		max-width: 1180px;
		margin-inline: auto;
		background: var(--ink);
		color: var(--bg);
		display: grid;
		grid-template-columns: var(--cut) 1fr;
		min-height: 460px;
	}

	.notch {
		position: absolute;
		left: var(--cut);
		width: 32px;
		height: 32px;
		border-radius: 50%;
		background: var(--bg);
		transform: translate(-50%, -50%);
	}

	.notch.top {
		top: 0;
	}

	.notch.bottom {
		top: 100%;
	}

	.stub {
		padding: 48px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 32px;
	}

	h2 {
		font-size: var(--step-head);
		max-width: 9ch;
	}

	.stub p {
		max-width: 34ch;
	}

	.fields {
		padding: 48px;
		border-left: 6px dotted var(--bg);
		display: flex;
		flex-direction: column;
		gap: 10px;
	}

	input,
	textarea {
		width: 100%;
		min-height: 52px;
		padding: 14px 16px;
		font: inherit;
		font-size: 16px;
		color: var(--bg);
		background: #0c6d78;
		border: 0;
		resize: vertical;
	}

	input::placeholder,
	textarea::placeholder {
		color: #cfe0dc;
		opacity: 1;
	}

	input:focus-visible,
	textarea:focus-visible {
		outline: 3px solid var(--bg);
		outline-offset: 0;
		background: #0f7a86;
	}

	.send {
		margin-top: 6px;
		min-height: 56px;
		width: 100%;
	}

	@media (max-width: 820px) {
		.coupon {
			grid-template-columns: 1fr;
		}

		.notch {
			top: auto;
			left: 0;
			width: 28px;
			height: 28px;
		}

		.notch.top,
		.notch.bottom {
			top: var(--stub-h, 220px);
		}

		.notch.bottom {
			left: 100%;
		}

		.stub {
			padding: 32px 24px;
			min-height: 220px;
		}

		.fields {
			border-left: 0;
			border-top: 6px dotted var(--bg);
			padding: 32px 24px;
		}

		input,
		textarea {
			min-height: 54px;
		}
	}
</style>
