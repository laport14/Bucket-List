import api from "./apiConfig"

export const addComment = async (id, commentData) => {
  const resp = await api.post(`/activities/${id}/comments`, { comment: commentData })
  return resp.data
}