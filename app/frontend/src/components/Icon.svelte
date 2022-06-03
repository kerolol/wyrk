<script lang="ts">
    import home from '../assets/img/icons/home.svg'
    import projects from '../assets/img/icons/projects.svg'
    import customers from '../assets/img/icons/customers.svg'

    export let name: string
    export let className: string

    const getIconPath = (name: string): string|null => {
        switch (name) {
            case 'home':
                return home
            case 'projects':
                return projects
            case 'customers':
                return customers
            default:
                return null
        }
    }
</script>

<img src={getIconPath(name)} alt="{name} icon" class="{className}" />