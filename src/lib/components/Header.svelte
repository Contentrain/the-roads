<script>
  // @ts-nocheck

  import { years, activeYear, headerData } from "$lib/stores";
  let selected = $activeYear;
  activeYear.subscribe((value) => {
    selected = value;
  });
  const updateActiveYear = (e) => {
    const value = e.target.value;
    window.location.hash = value;
    selected = value;
  };
</script>

<header class="border-b border-slate-200 px-[48px] py-[24px]">
  <div class="flex justify-between">
    <div class="">
      <img src={$headerData[0].logo.split('static')[1]} alt="logo" />
    </div>
    <div class="justify-items-end">
      <div class="text-sky-500 text-xl hidden lg:block">
        {#each $headerData[0].links as item}
        <a target="_blank" href={item.link}>
            <i class={item.icon} />
          </a>
        {/each}
      </div>
    </div>
    <select
      value={selected}
      on:change={updateActiveYear}
      class="border-2 border-slate-200 rounded-md p-2 bg-slate-100 z-50 lg:hidden"
    >
      {#each $years as year}
        <option value={String(year)}>{year}</option>
      {/each}
    </select>
  </div>
</header>
