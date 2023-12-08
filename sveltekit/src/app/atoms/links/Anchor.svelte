<script lang="ts">
	export let href: string;
	export let target: string;

	export let size: keyof typeof sizeMap;
	export let variant: keyof typeof variantMap;
	const sizeMap = {
		sm: 'text-sm ',
		base: 'text-base',
		lg: 'text-lg'
	};
	const variantMap = {
		primary: 'text-dark hover:text-green focus-visible:text-green',
		dark: 'text-dark hover:text-black focus-visible:text-black'
	};

	const sizeClass = sizeMap[size];
	const variantClass = variantMap[variant];
</script>

<a
	{href}
	{target}
	class={` ${sizeClass} ${variantClass} outline-none focus-visible:outline-none focus-visible:underline underline-offset-4 decoration-from-font transition-all duration-200 ease-in-out font-cs-book capitalize`}
>
	<slot /></a
>
