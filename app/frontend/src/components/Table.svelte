<script lang="ts">
    import { useNavigate } from "svelte-navigator"
    import type { TableData } from "../interfaces"

    export let data: TableData
    export let useLinks = false

    const navigate = useNavigate()

    const handleClick = (path: string|null) => {
        if (!useLinks) {
            return
        }

        return navigate(path)
    }
</script>

<div class="grid grid-cols-12">
    {#each data.headers as header, index}
        <div class="
            bg-wyrk-400 
            text-wyrk-200 
            text-sm 
            p-4 
            col-span-{header.span}
            {index === 0 ? 'rounded-tl-md' : index === data.headers.length - 1 ? 'rounded-tr-md' : ''}
        ">
            {header.title}
        </div>
    {/each}
</div>

{#each data.rows as row, rowIndex}
    <div class="
        grid 
        grid-cols-12 
        bg-wyrk-800 
        {useLinks ? 'cursor-pointer hover:bg-opacity-50' : ''}
        {rowIndex === data.rows.length - 1 ? 'rounded-bl-md rounded-br-md' : ''}
    ">
        {#each row.contents as field}
            <div class="
                p-4
                border-b
                text-white
                {rowIndex === data.rows.length - 1 ? 'border-none ' : 'border-wyrk-500'} 
                col-span-{data.headers[field.header - 1].span}
            " on:click={() => handleClick(row.path)}>
                {field.body}
            </div>
        {/each}
    </div>
{:else}
    <div class="col-span-12 text-white p-4">
        <p>No contents available.</p>
    </div>
{/each}