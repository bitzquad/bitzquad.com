<script>
	import { lang } from "$lib/siteUtils";
	import Txt from "./ContactFormText";
</script>

<div class="bg-slate-100 w-full py-10 lg:py-20 bz-container">
	<div class="bg-slate-100 w-full container max-w-7xl">
		<div>
			<h3 class="text-3xl lg:text-4xl   text-center">
				{Txt.MainTitle[lang]}
			</h3>
			<p class="py-2 text-center">{Txt.SubTitle[lang]}</p>
		</div>
		<div class="px-5 w-full flex lg:flex-row">
			<img
				src="/contact-form.svg"
				alt="contact-form"
				class="hidden lg:block lg:w-1/2 lg:h-auto px-20"
			/>
			<form class="contact-form">
				<div class="group relative  z-0 mb-6 w-full">
					<input
						type="text"
						name="floating_name"
						class="peer contact-form-input "
						placeholder=" "
						required
					/>
					<label for="floating_name" class="contact-form-input-label">
						{Txt.Name[lang]}
					</label>
				</div>
				<div class="group relative  z-0 mb-6 w-full">
					<input
						type="text"
						name="floating_email"
						class="peer contact-form-input"
						placeholder=" "
						required
					/>
					<label
						for="floating_email"
						class="contact-form-input-label"
					>
						{Txt.Email[lang]}
					</label>
				</div>
				<div class="group relative  z-0 mb-6 w-full">
					<input
						type="text"
						name="floating_subject"
						class="peer contact-form-input"
						placeholder=" "
						required
					/>
					<label
						for="floating_subject"
						class="contact-form-input-label"
					>
						{Txt.Subject[lang]}
					</label>
				</div>
				<div class="group relative  z-0 mb-6 w-full">
					<textarea
						name="floating_message"
						class="peer contact-form-input"
						placeholder=" "
						rows="4"
						required
					/>
					<label
						for="floating_message"
						class="contact-form-input-label"
					>
						{Txt.Message[lang]}
					</label>
				</div>
				<button class="bz-button w-full rounded  py-2 text-center"
					>{Txt.Send[lang]}</button
				>
			</form>
		</div>
	</div>
</div>
