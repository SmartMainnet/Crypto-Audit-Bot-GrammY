import { UserModel } from '../models/index.js'

export const createUser = async from => {
  const userFromDb = await UserModel.findOne({ id: from.id })

  if (!userFromDb) {
    const user = new UserModel({
      id: from.id,
      username: from.username,
      first_name: from.first_name,
      last_name: from.last_name
    })
  
    user
      .save()
      .then(res => console.log(res))
      .catch(e => console.log(e))
  }
}