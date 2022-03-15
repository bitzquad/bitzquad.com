<script context="module">
	const social = {
		facebook: 'https://www.facebook.com/bitzquad/',
		linkedin: 'https://www.linkedin.com/company/bitzquad/',
		instagram: 'https://www.instagram.com/',
		twitter: 'https://twitter.com/',
		youtube: 'https://www.youtube.com/',
		github: 'https://github.com/bitzquad/',
		behance: 'https://www.behance.net/Bitzquad',
	};

	export async function load({ params }) {
		if (social[params.index]) {
			return {
				status: 302,
				redirect: social[params.index],
			};
		} else {
			return {
				notFound: true,
			};
		}
	}
</script>
