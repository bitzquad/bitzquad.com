<script>
    import { onMount } from "svelte";
    let con;
    let txt;
    let update = false;
    let elem;
    let w;
    let h;
    onMount(() => {
        con = document.getElementById("container");
        txt = document.getElementById("txt");
        w = con.clientWidth;
        h = con.clientHeight;
        window.addEventListener(
            "contextmenu",
            function (ev) {
                if (elem != null) {
                    ev.preventDefault();
                    mouseUp();
                    update = !update;
                    elem = null;
                }
                return false;
            },
            false
        );
    });
    function moveIcon(ele, mouse) {
        let relX = mouse.clientX - (window.innerWidth - w) / 2;
        let relY = mouse.clientY - (window.innerHeight - h) / 2;
        ele.style.top = (relY / h) * 100 + "%";
        ele.style.left = (relX / w) * 100 + "%";
        //ele.style.top = mouse.clientY + "px";
        //ele.style.left = mouse.clientX + "px";
        txt.innerHTML =
            "Mouse : { " +
            mouse.clientX +
            " , " +
            mouse.clientY +
            " }\tContainer : {" +
            relX +
            " , " +
            relY +
            "} Width : " +
            w +
            " Height : " +
            h;
    }
    function move(e) {
        moveIcon(elem, e);
    }
    function mouseUp() {
        console.log("Relese Hook");
        con.removeEventListener("mousemove", move, true);
    }
    function iconClick(e) {
        console.log("Add Hook");
        elem = e.srcElement;
        update = !update;
        con.addEventListener("mousemove", move, true);
    }
</script>

<div
    class=" flex justify-center align-center sm:pt-10 sm:pb-10 md:p-10 lg:p-24 relative"
    style="width: 100vw; height:100vh; background: radial-gradient(74.85% 149.16% at 74.53% 25.15%, #410030 0%, #00151A 100%); "
>
    <p id="txt" style="position: absolute; top:0px;left:0px" />
    <div style="width:100%;height:100%;" id="container">
        <div
        class="icon-ball"  on:click={iconClick}
        style="background-image: url('/react-icon.svg'); top: 8.19246%; left: 28.6458%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5vw 5vw; background-image: url('/svelte-icon.svg'); top: 14.9545%; left: 10.3588%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 6.5vw 6.5vw; background-image: url('/dotnet-icon.svg'); top: 29.1287%; left: 36.0532%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/1-icon.svg'); top: 26.9181%; left: 22.338%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/2-icon.svg'); top: 57.2172%; left: 19.3866%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/3-icon.svg'); top: 77.3732%; left: 16.2037%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/4-icon.svg'); top: 46.684%; left: 28.588%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/5-icon.svg'); top: 51.2354%; left: 69.0104%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 7vw 7vw; background-image: url('/6-icon.svg'); top: 12.6138%; left: 79.3113%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/7-icon.svg'); top: 80.8843%; left: 75.2315%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/aws-icon.svg'); top: 25.8778%; left: 58.6227%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/mongodb-icon.svg'); top: 29.1287%; left: 71.0359%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/vs-icon.svg'); top: 24.8375%; left: 87.1238%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/gcloud-icon.svg'); top: 8.84265%; left: 64.4676%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/tailwind-icon.svg'); top: 61.2484%; left: 8.91204%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 5.5vw 5.5vw; background-image: url('/sql-icon.svg'); top: 62.8088%; left: 80.9317%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 4.5vw 4.5vw; background-image: url('/js-icon.svg'); top: 37.5813%; left: 11.0532%;"
    />
    <div
        class="icon-ball"  on:click={iconClick}
        style="background-size: 4.5vw 4.5vw; background-image: url('/lambda-icon.svg'); top: 42.1326%; left: 80.5266%;"
    />

        <div class="relative" style="width: 100%; height: 100%;">
            <div
                class="absolute top-0 md:scale-50 lg:scale-75 xl:scale-90"
                style="width: 100%; height: 100%;background-image: url('/techstack.svg');  background-repeat: no-repeat; background-position: center;"
            />
            <h1
                class="text-center text-white font-semibold"
                style="font-size: 3vw;"
            >
                Our Techstack
            </h1>
            <div class="bottom-0 absolute" style="width: 100%;">
                <h6
                    class="text-center text-white sm:text-sm md:text-lg xl:text-xl pl-5 pr-5 md:pl-40 md:pr-40 lg:pl-60 lg:pr-60 xl:pl-96 xl:pr-96"
                >
                    We evolve with the world to acquire cutting edge technology
                    for you to stay ahead of others stuck on decades old
                    software.
                </h6>
            </div>
        </div>
    </div>
</div>


<style>
    .icon-ball {
        @apply bg-white shadow-2xl shadow-slate-400 absolute hover:animate-bounce;
        border-radius: 7vw;
        width: 7vw;
        height: 7vw;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        z-index: 100;
    }
</style>
