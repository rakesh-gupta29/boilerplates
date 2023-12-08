<script>
	import MasterAnchor from 'atoms/links/MasterAnchor.svelte';
	import MasterBtn from '../app/atoms/buttons/MasterBtn.svelte';
	import Anchor from 'atoms/links/Anchor.svelte';
</script>

<svelte:head>
	<meta itemprop="name" content="" />
	<meta name="title" content="" />
	<meta name="description" content="" />
	<title></title>
</svelte:head>

<!-- <MasterBtn type="submit" size="base" variant="primary" callback={() => {}}>something</MasterBtn> -->
<MasterAnchor target="_self" href="#" size="base" variant="primary">something</MasterAnchor>
<Anchor href="#" size="base" target="_self" variant="primary">Call me baby</Anchor>
