<script lang="ts">
    import Icon from './Icon.svelte';
    import { Link } from 'svelte-navigator'

    export let icon: string;
    export let to: string;
</script>

<li>
    <Link to="{to}" class="flex py-4 text-wyrk-200 hover:text-white">
        <Icon name="{icon}" className="mr-4" />
        <slot></slot>
    </Link>
</li>