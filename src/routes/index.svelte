<script lang="ts">
    export let getMessage: number = 0;
    export let postMessage: number = 0;
</script>

<p>To reproduce:</p>
<ul>
    <li>Click <strong>Submit</strong></li>
    <li>Refresh page:
        <ul>
            <li>On Chrome: page refreshes fine</li>
            <li>On Safari: browser asks if you want to submit form again</li>
        </ul>
    </li>
</ul>

<form method="post">
    <input type="submit" />
</form>

<p>get: {getMessage}</p>
<p>post: {postMessage}</p>
