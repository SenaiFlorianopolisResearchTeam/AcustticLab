#!/usr/bin/env sh

_() {
  sudo docker-compose up -d --build
} && _

unset -f _