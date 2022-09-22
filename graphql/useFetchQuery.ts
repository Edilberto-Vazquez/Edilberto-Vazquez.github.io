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
  defaultLanguage: Language
}

const useGqlQuery = ({
  query,
  variables,
  defaultLanguage,
}: useFetchQueryProps): QueryResponse => {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)
  const [data, setData] = useState<any>(query.response)

  useEffect(() => {
    if (loading) return
    if (error) return
    const handleQuery = async ({
      query,
      variables,
      defaultLanguage,
    }: useFetchQueryProps) => {
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
              variables: variables ? variables : defaultLanguage,
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
    handleQuery({ query, variables, defaultLanguage })
    return
  }, [query, variables])

  return { loading, error, data }
}

export { useGqlQuery }
