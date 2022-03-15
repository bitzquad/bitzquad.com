<script context="module">
    
  const social = {
    facebook: 'https://www.facebook.com/bitzquad/',
    linkedin: 'https://www.linkedin.com/company/bitzquad/',
    instagram: '',
    twitter: '',
    youtube: '',
    github: 'https://github.com/bitzquad/',
    behance: '',
  };

  export async function load({ params }) {
    if (social[params.index]) {
      return {
        status: 302,
        redirect: social[params.index],
      };
    } else {
      return {
        status: 404,
      };
    }
  }
</script>
