<script lang="ts" setup>

</script>

<template>
    <div>
        <h1>
            I am a h1 tag
        </h1>
        <h2>
            I am a h2 tag
        </h2>
        <h3>
            I am a h3 tag
        </h3>
        <h4>
            I am a h4 tag
        </h4>
        <p>
            I am a paragraph tag
        </p>
        <a href="#">
            I am a link
        </a>
        <blockquote>
            I am a blockquote
        </blockquote>
        <pre>I am a pre tag</pre>
        <code>print("Hello World!")</code>
        <br>
        <br>
        <pre><code>// program that checks if the number is positive, negative or zero
// input from the user
const number = parseInt(prompt("Enter a number: "));

// check if number is greater than 0
if (number > 0) {
    console.log("The number is positive");
}

// check if number is 0
else if (number == 0) {
    console.log("The number is zero");
}

// if number is less than 0
else {
    console.log("The number is negative");
}
</code></pre>
        <ul>
            <li>
                I am a list item
            </li>
            <li>
                I am a list item
            </li>
            <li>
                I am a list item
            </li>
        </ul>
        <small>
            I am a small tag
        </small>
    </div>
</template>
