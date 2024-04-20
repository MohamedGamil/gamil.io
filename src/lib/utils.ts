import { isMagicMouseInit } from "./store";

let _hasInit: boolean = false;

export const initMagicMouse = (force = false) => {
    if (true === _hasInit && false === force) {
        return;
    }

    isMagicMouseInit.subscribe((isInit) => {
        if (true === isInit && false === force) {
            return;
        }

        const options: any = {
            outerStyle: "disable",
            hoverEffect: "pointer-overlay",
            // hoverEffect: "pointer-move",
            hoverItemMove: false,
            defaultCursor: false,
            outerWidth: 30,
            outerHeight: 30
        };

        window.magicMouse(options);
        isMagicMouseInit.set(true);
        _hasInit = true;
    });
};

export const reInitMagicMouse = () => {
    document.querySelectorAll('#magicPointer').forEach(
        (el) => {
            el.remove();
        }
    );

    setTimeout(() => {
        initMagicMouse(true);
    }, 300);
};
