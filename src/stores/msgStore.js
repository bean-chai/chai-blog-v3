/*
 * @Author: chaichai 2787922490@qq.com
 * @Date: 2024-01-29 10:03:59
 * @LastEditors: chaichai 2787922490@qq.com
 * @LastEditTime: 2024-01-30 17:18:15
 * @FilePath: \chaichaiBlog\src\stores\msgStore.js
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { defineStore } from 'pinia'
import { marked } from 'marked'

export const userMsgStore = defineStore("userMsgStore", {
    // 持久化
    persist: true,
    state: () => {
        return {
            list: []
        }
    },
    actions: {
        userAddMsg(msg) {
            if (msg.toLowerCase().includes('who are you')) {
                console.log(1);
                msg = '你是谁'
            }
            this.list.push({
                role: "user",
                content: msg,
                status: 2
            })
        },
        aiAddMsg(content, status) {
            if (content.includes('科大讯')) {
                content = content.replace('科大讯', '柴柴博')
            }
            if (content.includes('飞研发')) {
                content = content.replace('飞研发', '客内嵌')
            }
            if (content.includes('讯飞星火认知大')) {
                content = content.replace('讯飞星火认知大', '柴柴')
            }
            if (content.includes('大模型')) {
                content = content.replace('大模型', 'GPT')
            }
            if (content.includes('模型')) {
                content = content.replace('模型', 'GPT')
            }
            const runMsg = this.list.find(i => i.status !== 2)
            if (!runMsg) {
                this.list.push({
                    role: "assistant",
                    content: content,
                    status: status
                })
            } else {
                runMsg.content += content
                runMsg.status = status
                if (status === 2) {
                    runMsg.content = marked(runMsg.content)
                }
            }
        }
    },
})
