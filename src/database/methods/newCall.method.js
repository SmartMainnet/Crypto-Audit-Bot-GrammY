import { UserModel } from '../models/index.js'

export const newCall = async (id, address) => {
  UserModel.findOneAndUpdate(
    { id },
    {
      $push: {
        calls: {
          call: address
        }
      }
    }
  ).catch(e => console.log(e))
}