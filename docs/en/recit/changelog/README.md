# Changelog

## [1.3.0] - Unreleased

| Module          | Version |
| --------------- | ------- |
| RecIt-Scheduler | 1.3.0   |
| RecIt-Worker    | 1.3.0   |
| RecIt-Console   | 1.3.0   |

## [1.2.0] - 2019.11

| Module          | Version |
| --------------- | ------- |
| RecIt-Scheduler | 1.2.0   |
| RecIt-Worker    | 1.2.0   |

## [1.1.1] - 2019.9

| Module          | Version |
| --------------- | ------- |
| RecIt-Scheduler | 1.1.1   |
| RecIt-Worker    | 1.1.1   |

## [1.1.0] - 2019.8

| Module          | Version |
| --------------- | ------- |
| Admin system    | 1.1.0   |
| Container image | 1.1.0   |

### Changed

- Use Alpine instead of Ubuntu for smaller image size
- Use Chromium instead of Firefox for better configurability and compatibility

## [1.0.1] - 2018.12

| Module          | Version |
| --------------- | ------- |
| Admin system    | 1.0.1   |
| Container image | 1.0.1   |

### Changed

- If the corresponding task is not ready when a stop (record/rtmp) request is made, a success code will be returned instead of an error code.
- Audio is delayed by 1.5 s so for better synchronization between audio and video. This is applied to both record and rtmp.

## [1.0.0] - 2018.12

| Module          | Version |
| --------------- | ------- |
| Admin system    | 1.0.0   |
| Container image | 1.0.0   |

Our first release version.

### Fixed

- If the corresponding task is not ready when a stop (record/rtmp) request is made, the request can be handled properly, and the task will be cancelled.

---

## For developers

Please follow [keep a changelog](https://keepachangelog.com/en/1.0.0/) to update this document.
