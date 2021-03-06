# RecIt 回调信息

回调包含 3 个参数

- 任务编号`display`
- 事件类型`message`
- 事件数据`data`

所有事件对应的`message`和`data`说明见下表

| 回调事件     | message              | data                |
| ------------ | -------------------- | ------------------- |
| 任务开始     | task-started         | 无                  |
| 任务结束     | task-stopped         | 无                  |
| 任务取消     | task-cancelled       | 无                  |
| 录制开始     | record-started       | String recordName   |
| 录制停止     | record-stopped       | String recordName   |
| 录制失败     | record-failed        | String recordName   |
| 推流开始     | push-started         | Long rtmpId         |
| 推流停止     | push-stopped         | Long rtmpId         |
| 推流失败     | push-failed          | 无                  |
| 录像上传成功 | video-upload-success | RecordFile fileInfo |
| 录像上传失败 | video-upload-failed  | String error        |
