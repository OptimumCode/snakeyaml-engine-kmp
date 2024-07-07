window.BENCHMARK_DATA = {
  "lastUpdate": 1720331743054,
  "repoUrl": "https://github.com/OptimumCode/snakeyaml-engine-kmp",
  "entries": {
    "SnakeKMP benchmarks": [
      {
        "commit": {
          "author": {
            "email": "oleg.smirnov@exactprosystems.com",
            "name": "Oleg",
            "username": "OptimumCode"
          },
          "committer": {
            "email": "oleg.smirnov@exactprosystems.com",
            "name": "Oleg",
            "username": "OptimumCode"
          },
          "distinct": true,
          "id": "ca188805c63a67eb09fdf366ebb326f3a3bad713",
          "message": "Extract related path by regex",
          "timestamp": "2024-07-07T09:36:00+04:00",
          "tree_id": "2578e9d502d5904cb2c468a2604daa3ce2325dac",
          "url": "https://github.com/OptimumCode/snakeyaml-engine-kmp/commit/ca188805c63a67eb09fdf366ebb326f3a3bad713"
        },
        "date": 1720331742664,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 168.16622296854166,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.400625999510822,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 90.17156931886792,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.435141732031255,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 112.48780144999998,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 146.1328897142857,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}