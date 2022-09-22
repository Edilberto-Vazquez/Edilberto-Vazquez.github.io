import React, { useEffect, useState } from "react"
import { QueryResponse } from "../types/types"

type queryType = {
  value: string
  name: string
  response: any
}

type Language = {
  lang: string
}

type useFetchQueryProps = {
  query: queryType
  variables: Language
} & typeof defaultProps

const defaultProps = {
  variables: { lang: "en-US" },
}

const useGqlQuery = ({
  query,
  variables,
}: useFetchQueryProps): QueryResponse => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<any>(query.response)

  const handleQuery = async ({ query, variables }: useFetchQueryProps) => {
    try {
      setLoading(true)
      const response: Response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/query`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          cache: "force-cache",
          body: JSON.stringify({
            query: query.value,
            variables: variables ? variables : { lang: "en-US" },
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
    if (loading) return
    if (error) return
    handleQuery({ query, variables })
    return
  }, [query, variables])

  return { loading, error, data }
}

useGqlQuery.defaultProps = defaultProps

export { useGqlQuery }
