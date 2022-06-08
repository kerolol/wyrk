<script lang="ts">
    import ContentHeader from "../../components/ContentHeader.svelte"
    import Table from "../../components/Table.svelte"
    import breadcrumbs from '../../breadcrumbs'    
</script>

<ContentHeader title="Task List" breadcrumbs="{breadcrumbs.projectsTaskList}" />

<Table data={{
    headers: [{
        id: 1,
        title: 'ID',
        span: 1
    }, {
        id: 2,
        title: 'Task',
        span: 5
    }, {
        id: 3,
        title: 'Status',
        span: 2
    }, {
        id: 4,
        title: 'Due date',
        span: 2
    }, {
        id: 5,
        title: 'Time tracked',
        span: 2
    }],
    rows: [{
        id: 1,
        contents: [{
            id: 1,
            header: 1,
            body: '1'
        }, {
            id: 2,
            header: 2,
            body: 'Test Task'
        }, {
            id: 3,
            header: 3,
            body: 'In Progress'
        }, {
            id: 4,
            header: 4,
            body: '03.07.2022'
        }, {
            id: 5,
            header: 5,
            body: '2h 34m'
        }]
    }, {
        id: 2,
        contents: [{
            id: 6,
            header: 1,
            body: '2'
        }, {
            id: 7,
            header: 2,
            body: 'Test Task'
        }, {
            id: 8,
            header: 3,
            body: 'Done'
        }, {
            id: 9,
            header: 4,
            body: '03.07.2022'
        }, {
            id: 10,
            header: 5,
            body: '1h 23m'
        }]
    }]
}} />