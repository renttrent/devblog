import { client } from "../../../util/contentful_services"


export default function handler(req, res) {
  client.getEntries({
    content_type: 'project',
  }).then((entry) => {
    res.status(200).json(entry)
  })
}
