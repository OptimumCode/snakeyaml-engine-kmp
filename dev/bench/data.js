window.BENCHMARK_DATA = {
  "lastUpdate": 1719680184450,
  "repoUrl": "https://github.com/OptimumCode/snakeyaml-engine-kmp",
  "entries": {
    "My Project Go Benchmark": [
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
          "id": "39fe1bcf52bffc8d2a6054620591fe32bcd5e3be",
          "message": "Add benchmark workflow",
          "timestamp": "2024-06-29T20:42:24+04:00",
          "tree_id": "dd3549b1c3cb51d7ec52f93f9478ef2aab02d00a",
          "url": "https://github.com/OptimumCode/snakeyaml-engine-kmp/commit/39fe1bcf52bffc8d2a6054620591fe32bcd5e3be"
        },
        "date": 1719679924415,
        "tool": "jmh",
        "benches": [
          {
            "name": "it.krzeminski.snakeyaml.engine.kmp.benchmark.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/benchmark/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.315460919112265,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ],
    "SnakeKMP benchmark": [
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
          "id": "90c588e7ca4ce924021d868f62d048de1bf81b58",
          "message": "Rename benchmark",
          "timestamp": "2024-06-29T20:53:52+04:00",
          "tree_id": "a2023929e672d329348ac2999a9d0abec6599a44",
          "url": "https://github.com/OptimumCode/snakeyaml-engine-kmp/commit/90c588e7ca4ce924021d868f62d048de1bf81b58"
        },
        "date": 1719680183496,
        "tool": "jmh",
        "benches": [
          {
            "name": "it.krzeminski.snakeyaml.engine.kmp.benchmark.LoadingTimeBenchmark.loadsOpenAiSchema ( {\"openAiYamlPath\":\"/home/runner/work/snakeyaml-engine-kmp/snakeyaml-engine-kmp/benchmark/data/issues/kmp-issue-204-OpenAI-API.yaml\"} )",
            "value": 20.355723659708023,
            "unit": "ms/op",
            "extra": "iterations: 10\nforks: 1\nthreads: 1"
          }
        ]
      }
    ]
  }
}