# RecIt Callbacks

RecIt Callbacks have 3 parameters

- `display`, id of the task
- `message`, type of the event
- `data`, detailed information about the event

`message` and `data` for all events are described below.

| message              | data                |
| -------------------- | ------------------- |
| task-started         | 无                  |
| task-stopped         | 无                  |
| task-cancelled       | 无                  |
| record-started       | String recordName   |
| record-stopped       | String recordName   |
| record-failed        | String recordName   |
| video-upload-success | RecordFile fileInfo |
| video-upload-failed  | String error        |
