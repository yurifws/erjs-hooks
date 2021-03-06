import { useState } from "react";

export default function usePeople() {
  const [people, setPeople] = useState(['Yuri', 'João'])

  function addPerson(name: string) {
    setPeople([...people, name])
  }

  return {
    people,
    addPerson
  }
}