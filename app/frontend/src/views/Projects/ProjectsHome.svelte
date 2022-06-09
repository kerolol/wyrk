<script lang="ts">
    import ContentHeader from "../../components/ContentHeader.svelte"
    import Table from "../../components/Table.svelte"
    import Button from "../../components/Button.svelte";
</script>

<ContentHeader 
    title="Projects" 
    breadcrumbs={null}
    useSlot={true}
>
    <Button label="Hallo" outlined icon="home" color="blue" />
</ContentHeader>

<Table useLinks data={{
    headers: [{
        id: 1,
        title: 'ID',
        span: 2
    }, {
        id: 2,
        title: 'Project Name',
        span: 6
    }, {
        id: 3,
        title: 'Status',
        span: 2
    }, {
        id: 4,
        title: 'Time tracked',
        span: 2
    }],
    rows: [{
        id: 1,
        path: '/project/proj/tasks',
        contents: [{
            id: 1,
            header: 1,
            body: 'PROJ'
        }, {
            id: 2,
            header: 2,
            body: 'Project Name'
        }, {
            id: 3,
            header: 3,
            body: 'In Progress'
        }, {
            id: 4,
            header: 4,
            body: '2d 13h 54m'
        }]
    }, {
        id: 2,
        path: '/project/aproj/tasks',
        contents: [{
            id: 1,
            header: 1,
            body: 'APROJ'
        }, {
            id: 2,
            header: 2,
            body: 'Another Project Name'
        }, {
            id: 3,
            header: 3,
            body: 'Maintenance'
        }, {
            id: 4,
            header: 4,
            body: '12d 5h 38m'
        }]
    }]
}} />