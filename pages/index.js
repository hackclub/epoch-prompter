import { Box, Text, Grid, Flex } from 'theme-ui'
import { useState } from 'react'

let options = {
  Unexpected: {
    But: {
      Expected: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Lame: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Solved: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Mysteries: null
      },
      Unoriginal: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Mysteries: null
      }
    },
    And: {
      Uncertain: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Exuberant: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Unexplored: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Creations: null
      },
      Unsolved: {
        Gizmos: null,
        Adventures: null,
        Hacks: null,
        Mysteries: null
      }
    },
    Experiences: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      With: {
        Troglodytes: null,
        Elephants: null,
        Cameras: null,
        Humans: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
    Surprises: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      Yet: {
        Expected: null,
        Lame: null,
        Solved: null,
        Unoriginal: null
      },
      With: {
        Troglodytes: null,
        Elephants: null,
        Cameras: null,
        Humans: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    }
  },
  Exuberant: {
    Gizmos: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Shriek: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
    Adventures: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      Nobody: {
        Enjoys: null,
        Takes: null,
        Hates: null,
        Loves: null
      },
      Without: {
        "A Guide": null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
    Hacks: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      Nobody: {
        Enjoys: null,
        Takes: null,
        Hates: null,
        Loves: null
      },
      Without: {
        "A Guide": null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
    "Shit": {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Shriek: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
  },
  Stupid: {
    Art: {
      For: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Dabs: null
      },
      With: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      Without: {
        Colour: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    },
    Websites: {
      For: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Dabs: null
      },
      With: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      Without: {
        Colour: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    },
    Games: {
      For: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Dabs: null
      },
      With: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      Without: {
        Colour: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    },
    Apps: {
      For: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      That: {
        Runs: null,
        Sleeps: null,
        Eats: null,
        Dabs: null
      },
      With: {
        Monkeys: null,
        Elephants: null,
        Chickens: null,
        Humans: null
      },
      Without: {
        Colour: null,
        Sound: null,
        Sleep: null,
        Humans: null
      }
    }
  },
  Extraterrestrial: {
    Life: {
      On: {
        Earth: null,
        "A Mission": null,
        Uranus: null,
        Stimulants: null
      },
      That: {
        "Faces Turbulence": null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      With: {
        Troglodytes: null,
        "Cricket": null,
        Intelligence: null,
        "out Brains": null
      },
      Without: {
        "A Guide": null,
        "A Sense": null,
        Colour: null,
        "Home": null
      }
    },
    Experiences: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Challenge: null,
        Infuriate: null,
        "Unlock...": null,
        Entertain: null
      },
      In: {
        Delhi: null,
        Space: null,
        School: null,
        Japan: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
    Gadgets: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Shriek: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
    Technology: {
      For: {
        Troglodytes: null,
        Elephants: null,
        Pokemon: null,
        Humans: null
      },
      That: {
        Shriek: null,
        Infuriate: null,
        Combust: null,
        Entertain: null
      },
      Nobody: {
        Wants: null,
        Needs: null,
        Hates: null,
        Loves: null
      },
      Without: {
        Colour: null,
        "A Sense": null,
        Sleep: null,
        Murder: null
      }
    },
  }
}

let ex = "Stupid Shit Nobody Needs"

export default function Index() {
  const [stage, setStage] = useState(0)
  const [prompt, setPrompt] = useState(`Begin Epoch's Prompt:`)
  function processVote(word) {
    if (stage == 0) {
      setPrompt(word)
    }
    else {
      setPrompt(prompt + " " + word)
    }
    setStage(stage + 1)
  }
  function workDownTree(stage, tree, promptArray = null) {
    promptArray = promptArray || prompt.split(' ')
    if (stage == 1) {
      return tree[promptArray[0]]
    } else {
      let newTree = tree[promptArray[0]]
      promptArray.shift()
      stage--
      return workDownTree(stage, newTree, promptArray)
    }
  }
  return (
    <Flex p={3} sx={{ flexDirection: 'column', height: '100vh' }}>
      <Flex
        sx={{
          bg: stage!= 4 ? `rgba(255, 71, 148, ${stage * 0.25})` : "#FF4794",
          fontSize: stage != 4 ? '96px' : '144px',
          lineHeight: stage != 4 ? null : 1,
          borderRadius: 5,
          textAlign: 'center',
          fontWeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
          flexGrow: stage == 4 ? 1 :0,
          p: 3,
          paddingBottom: stage != 4 ? null : "64px",
        }}
      >
        <Text sx={{opacity: stage != 0 ? null : 0.9}}>{prompt}</Text>
      </Flex>
      {stage != 4 &&
      <Grid columns={2} pt={3} sx={{ flexGrow: 1 }} rows={'1fr 1fr'}>
        {['green', 'orange', 'red', 'purple'].map((color, index) => {
          let word = Object.keys(
            stage == 0 ? options : workDownTree(stage, options)
          )[index]
          return (
            <Flex
              sx={{
                bg: color,
                fontSize: '72px',
                borderRadius: 5,
                textAlign: 'center',
                fontWeight: 800,
                alignItems: 'center',
                justifyContent: 'center'
              }}
              onClick={() =>
                processVote(word)
              }
            >
              {word}
            </Flex>
          )
        })}
      </Grid>}
    </Flex>
  )
}
