import { Box, Text, Grid, Flex } from 'theme-ui'
import { useState } from 'react'

let options = {
  Create: {
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
  Build: {
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
  Craft: {
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
  Eat: {
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
  }
}

export default function Index() {
  const [stage, setStage] = useState(0)
  const [prompt, setPrompt] = useState(`Begin Epoch's prompt:`)
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
          fontSize: stage != 4 ? '96px' : '172px',
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
                fontSize: '96px',
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
