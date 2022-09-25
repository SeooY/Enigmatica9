JEIEvents.hideItems((event) => {
    jei.base.items.hidden.forEach((hiddenItem) => {
        if (!Item.of(hiddenItem).isEmpty()) {
            event.hide(hiddenItem);
        }
    });

    jei.base.items.disabled.forEach((disabledItem) => {
        if (!Item.of(disabledItem).isEmpty()) {
            event.hide(disabledItem);
        }
    });
});
