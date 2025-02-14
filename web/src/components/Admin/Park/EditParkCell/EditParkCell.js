import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import ParkForm from 'src/components/Admin/Park/ParkForm'

export const QUERY = gql`
  query EditParkById($id: Int!) {
    park: park(id: $id) {
      id
      park_name
      image_url
      description
      address
      working_time
    }
  }
`
const UPDATE_PARK_MUTATION = gql`
  mutation UpdateParkMutation($id: Int!, $input: UpdateParkInput!) {
    updatePark(id: $id, input: $input) {
      id
      park_name
      image_url
      description
      address
      working_time
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ park }) => {
  const [updatePark, { loading, error }] = useMutation(UPDATE_PARK_MUTATION, {
    onCompleted: () => {
      toast.success('Park updated')
      navigate(routes.parks())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updatePark({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Park {park?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <ParkForm park={park} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
