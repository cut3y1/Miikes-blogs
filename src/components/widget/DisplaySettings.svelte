<script lang="ts">
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import { getDefaultHue, getHue, setHue, themeColorOptions } from "@utils/setting-utils";

let hue = getHue();
const defaultHue = getDefaultHue();

function resetHue() {
	hue = getDefaultHue();
}

$: if (hue || hue === 0) {
	setHue(hue);
}
</script>

<div id="display-setting" class="float-panel float-panel-closed absolute transition-all w-80 right-4 px-4 py-4">
    <div class="flex flex-row gap-2 mb-3 items-center justify-between">
        <div class="flex gap-2 font-bold text-lg text-neutral-900 dark:text-neutral-100 transition relative ml-3
            before:w-1 before:h-4 before:rounded-md before:bg-[var(--primary)]
            before:absolute before:-left-3 before:top-[0.33rem]"
        >
            {i18n(I18nKey.themeColor)}
            <button aria-label="Reset to Default" class="btn-regular w-7 h-7 rounded-md  active:scale-90 will-change-transform"
                    class:opacity-0={hue === defaultHue} class:pointer-events-none={hue === defaultHue} on:click={resetHue}>
                <div class="text-[var(--btn-content)]">
                    <Icon icon="fa6-solid:arrow-rotate-left" class="text-[0.875rem]"></Icon>
                </div>
            </button>
        </div>
    </div>
    <div class="grid grid-cols-4 gap-2">
        {#each themeColorOptions as option}
            <button
                    type="button"
                    aria-label={`切换到${option.name}`}
                    aria-pressed={hue === option.hue}
                    class="theme-option transition rounded-lg h-10 flex items-center justify-center
                    bg-[var(--btn-regular-bg)] hover:bg-[var(--btn-regular-bg-hover)] active:bg-[var(--btn-regular-bg-active)]
                    border border-transparent"
                    class:border-[var(--primary)]={hue === option.hue}
                    class:ring-2={hue === option.hue}
                    class:ring-[var(--primary)]={hue === option.hue}
                    on:click={() => hue = option.hue}
            >
                <span class="w-6 h-6 rounded-full border border-black/10 dark:border-white/20"
                      style={`background: oklch(0.86 0.08 ${option.hue});`}>
                </span>
            </button>
        {/each}
    </div>
</div>
