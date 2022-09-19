APP_NAME = hackathon-template

.DEFAULT_GOAL=all
DOCKERFILES = $(shell find -name 'Dockerfile')
.PHONY: $(DOCKERFILES)

all: docker-images clean-dev deploy-dev

install:
	kind create cluster --config kind.config --name $(APP_NAME)
	kubectl apply --filename https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/kind/deploy.yaml


docker-images: $(DOCKERFILES)

$(DOCKERFILES): %/Dockerfile: %
	docker build -t invincibot/$(APP_NAME)-$< $<
	docker push invincibot/$(APP_NAME)-$<

deploy-dev:
	kubectl apply -f "k8s/*.yml"

clean-dev:
	kubectl delete -f "k8s/*.yml"
