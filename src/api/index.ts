import { profileApi, ProfileApi } from "./profile"

export type Api = {
  profile: ProfileApi;
}

export const api: Api = {
  profile: profileApi
}