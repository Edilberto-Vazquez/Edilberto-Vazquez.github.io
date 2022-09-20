import React, { useEffect, useState } from "react"
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

  const handleQuery = async (values: useFetchQueryProps) => {
    setLoading(true)
    try {
      const response: Response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: values.query.value,
          variables: values.variables,
        }),
      })
      const parseResponse = await response.json()
      if (parseResponse.errors) {
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
  }, [query, variables])

  return { loading, error, data }
}

export { useGqlQuery }
