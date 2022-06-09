<script lang="ts">
    import Icon from "./Icon.svelte";

    export let label: string;
    export let icon: string|null = null;
    export let color: string|null = null;
    export let outlined: boolean = false;
    export let size: ''|'sm'|'lg' = '';

    $: color = color ? color : 'green'
    $: padding = size === 'sm' ? 'p-1' : size === 'lg' ? 'p-3' : 'p-2'
    $: border = outlined ? 'border border-' + color + '-600' : ''
    $: background = outlined ? 'bg-transparent' : 'bg-' + color + '-600'
    $: text = outlined ? 'text-' + color + '-600' : 'text-white'
    $: hover = outlined ? 'hover:text-white hover:bg-' + color + '-600' : 'hover:bg-' + color + '-800'
</script>

<button class="
    flex
    rounded
    {padding}
    {border}
    {background}
    {text}
    {hover}
">
    {#if icon}
        <Icon name={icon} className="mr-2" />
    {/if}

    {label}
</button>