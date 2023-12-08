<script lang="ts">
	export let type: 'submit' | 'button';
	export let callback: () => void | undefined;
	export let size: keyof typeof sizeMap;
	export let variant: keyof typeof variantMap;
	const sizeMap = {
		sm: 'text-sm px-3 py-1.5',
		base: 'px-5 py-2 text-base',
		lg: 'px-7 py-2.5 text-lg'
	};
	const variantMap = {
		primary: 'bg-green text-white hover:bg-green-dark focus-visible:bg-green-dark',
		dark: 'bg-dark text-white hover:bg-black focus-visible:bg-black'
	};

	const sizeClass = sizeMap[size];
	const variantClass = variantMap[variant];
</script>

<button
	on:click={callback}
	{type}
	class={`${sizeClass} ${variantClass} rounded-full border-transparent outline outline-offset-2 font-cs-light capitalize tracking-wide focus-visible:outline-green hover:outline-green outline-[1.5px] transition-all duration-300 ease-in-out`}
>
	<slot />
</button>
