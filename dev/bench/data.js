window.BENCHMARK_DATA = {
  "lastUpdate": 1720253463950,
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
          "id": "947ff73bb5a15a6a14cb4cfd8575c77f9e8f2dfd",
          "message": "Revert \"Try to trim current location from parameters\"\n\nThis reverts commit 343ac8d95f236e53d231ce1e993b09525ca8d0a8.",
          "timestamp": "2024-07-06T12:02:13+04:00",
          "tree_id": "53f32f0921167df0d33eff2c6d9cde4e29809d5d",
          "url": "https://github.com/OptimumCode/snakeyaml-engine-kmp/commit/947ff73bb5a15a6a14cb4cfd8575c77f9e8f2dfd"
        },
        "date": 1720253462966,
        "tool": "jmh",
        "benches": [
          {
            "name": "js.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 163.98694957420292,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "jvm.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 32.07888801174467,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          },
          {
            "name": "linuxX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 89.5087594375,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosArm64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/Users/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 39.47487747936508,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "macosX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/Users/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/snake-kmp-benchmarks/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 113.6601769652174,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          },
          {
            "name": "mingwX64.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"D:\\\\a\\\\snakeyaml-engine-kmp\\\\snakeyaml-engine-kmp\\\\snake-kmp-benchmarks\\\\data\\\\issues\\\\kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 140.6460035135135,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: undefined\nthreads: undefined"
          }
        ]
      }
    ]
  }
}