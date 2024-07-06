window.BENCHMARK_DATA = {
  "lastUpdate": 1720252245860,
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
          "id": "14ae09c734404cd7c964fe0b9d271e58118f5af5",
          "message": "Add additional arguments to gradle run",
          "timestamp": "2024-07-06T11:41:58+04:00",
          "tree_id": "53f32f0921167df0d33eff2c6d9cde4e29809d5d",
          "url": "https://github.com/OptimumCode/snakeyaml-engine-kmp/commit/14ae09c734404cd7c964fe0b9d271e58118f5af5"
        },
        "date": 1720252245389,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 151.43832796880847,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 31.552282488899106,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 92.20539574807692,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/Users/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.5793213968254,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/Users/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 111.76716960000002,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"D:\\\\a\\\\snakeyaml-engine-kmp\\\\snakeyaml-engine-kmp\\\\snake-kmp-benchmarks\\\\data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 145.61310257142856,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}