import type { TaskModel } from "../../models/TaskModel"
import type { TaskStateModel } from "../../models/TaskStateModel"

export enum TaskActionsTypes {
  START_TASK = 'START_TASK',
  INTERRUPT_TASK = 'INTERRUPT_TASK',
  RESET_STATE = 'RESET_STATE',
  COUNTDOWN = 'COUNTDOWN',
  COMPLETE_TASK = 'COMPLETE_TASK',
  CHANGE_SETTINGS = 'CHANGE_SETTINGS'
}

export type TaskActionModelWithPayload = {
  type: TaskActionsTypes.START_TASK,
  payload: TaskModel
} | {
  type: TaskActionsTypes.COUNTDOWN,
  payload: { secondsRemaining: number }
} | {
  type: TaskActionsTypes.CHANGE_SETTINGS,
  payload: TaskStateModel['config']
}

export type TaskActionWithoutPayload = {
  type: TaskActionsTypes.RESET_STATE,
} | {
  type: TaskActionsTypes.INTERRUPT_TASK,
} | {
  type: TaskActionsTypes.COMPLETE_TASK,
}

export type TaskActionModel =
  TaskActionModelWithPayload
  | TaskActionWithoutPayload 