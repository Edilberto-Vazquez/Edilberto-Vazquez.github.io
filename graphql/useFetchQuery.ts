import { useEffect, useState } from "react"
import { QueryResponse } from "../types/types"

type queryType = {
  value: string
  name: string
  response: any
}

type useFetchQueryProps = {
  query: queryType
  variables: any
}

const useGqlQuery = ({
  query,
  variables,
}: useFetchQueryProps): QueryResponse => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<any>(query.response)

  const handleQuery = async ({ query, variables }: useFetchQueryProps) => {
    setLoading(true)
    try {
      const response: Response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/query`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: query.value,
            variables: variables,
          }),
        }
      )
      const parseResponse = await response.json()
      if (parseResponse.errors?.lenght > 0) {
        console.log(parseResponse.errors[0].message)
        setError(true)
      }
      setData(parseResponse.data[query.name])
    } catch (error: any) {
      console.log(error)
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    handleQuery({ query, variables })
    return
  }, [query, variables])

  return { loading, error, data }
}

export { useGqlQuery }
