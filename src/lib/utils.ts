import { isMagicMouseInit } from "./store";

let _hasInit: boolean = false;

export const initMagicMouse = () => {
    if (true === _hasInit) {
        return;
    }

    isMagicMouseInit.subscribe((isInit) => {
        if (true === isInit) {
            return;
        }

        const options: any = {
            outerStyle: "disable",
            hoverEffect: "pointer-overlay",
            hoverItemMove: false,
            defaultCursor: false,
            outerWidth: 30,
            outerHeight: 30
        };

        window.magicMouse(options);
        isMagicMouseInit.set(true);
        _hasInit = true;
    });

    // document.querySelectorAll('#magicPointer:last-of-type').forEach((el) => el.remove());
};
