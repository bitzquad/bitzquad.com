<div
    class="p-24 flex justify-center align-center"
    style="width: 100vw; height:100vh;  "
>
    <div
        class="icon-ball"
        style="left:30%; transform:translate(0% , -30%); background-image: url('react-icon.svg');"
    />
    <div
        class="icon-ball"
        style="left:13%; top:15%; transform:translate(0% , 0%); background-size:5vw 5vw; background-image: url('svelte-icon.svg');"
    />
    <div
        class="icon-ball"
        style="left:20%; top:25%; transform:translate(0% , 0%); background-size:6.5vw 6.5vw; background-image: url('dotnet-icon.svg');"
    />
    <div
        class="icon-ball"
        style="left:15%; top:50%; transform:translate(0% , 0%); background-size:5.5vw 5.5vw; background-image: url('1-icon.svg');"
    />
    <div
        class="icon-ball"
        style="left:19%; top:70%; transform:translate(0% , 0%); background-size:5.5vw 5.5vw; background-image: url('2-icon.svg');"
    />
    <div
        class="icon-ball"
        style="left:40%; top:80%; transform:translate(0% , 0%); background-size:5.5vw 5.5vw; background-image: url('3-icon.svg');"
    />

    <div
        class="relative"
        style="width: 100%; height: 100%; background-image: url('techstack.svg');  background-repeat: no-repeat; background-position: center;"
    >
        <h1
            class="text-center text-gray-500 font-semibold"
            style="font-size: 3vw;"
        >
            Our Techstack
        </h1>
        <div class="bottom-0 absolute" style="width: 100%;">
            <h6 class="text-center text-gray-500 text-xl">
                We evolve with the world to acquire cutting edge technology for
                you to stay ahead of others stuck on decades old software.
            </h6>
        </div>
    </div>
</div>

<style>
    .icon-ball {
        @apply bg-white shadow shadow-slate-400 absolute;
        border-radius: 7vw;
        width: 7vw;
        height: 7vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        z-index: 100;
    }
</style>
