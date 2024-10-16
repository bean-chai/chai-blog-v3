// 定义一个接口，包含 key 和 newValue 属性
interface SetItemEvent extends CustomEvent {
    key: string;
    newValue: string | null;
}

// 定义 dispatchEventStrage 函数，用于重写 localStorage.getItem 方法
export const dispatchEventStrage = (): void => {
    // 保存原始的 localStorage.getItem 方法
    const signGetItem: Storage['getItem'] = localStorage.getItem;

    // 重写 localStorage.getItem 方法
    localStorage.getItem = function (key: string): string | null {
        // 创建一个名为 setEvent 的事件，并转换为 SetItemEvent 类型
        const setEvent = new CustomEvent('setItemEvent') as SetItemEvent;

        // 设置事件的属性
        setEvent.key = key;
        setEvent.newValue = null; // 因为 getItem 不会修改值，所以设为 null

        // 分发 setEvent 事件
        window.dispatchEvent(setEvent);

        // 调用原始的 localStorage.getItem 方法，并返回结果
        return signGetItem.call(this, key);
    }
}
